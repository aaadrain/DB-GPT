import logging
from typing import Dict, List, Type

from dbgpt.core import ModelMetadata
from dbgpt.model.adapter.embeddings_loader import (
    EmbeddingLoader,
    _parse_embedding_params,
)
from dbgpt.model.adapter.loader import _get_model_real_path
from dbgpt.model.cluster.worker_base import ModelWorker
from dbgpt.model.parameter import (
    EMBEDDING_NAME_TO_PARAMETER_CLASS_CONFIG,
    BaseEmbeddingModelParameters,
    EmbeddingModelParameters,
    WorkerType,
)
from dbgpt.util.model_utils import _clear_model_cache

logger = logging.getLogger(__name__)


class EmbeddingsModelWorker(ModelWorker):
    def __init__(self) -> None:
        from dbgpt.rag.embedding import Embeddings

        self._embeddings_impl: Embeddings = None
        self._model_params = None
        self.model_name = None
        self.model_path = None
        self._loader = EmbeddingLoader()

    def load_worker(self, model_name: str, model_path: str, **kwargs) -> None:
        if model_path.endswith("/"):
            model_path = model_path[:-1]
        model_path = _get_model_real_path(model_name, model_path)

        self.model_name = model_name
        self.model_path = model_path

    def worker_type(self) -> WorkerType:
        return WorkerType.TEXT2VEC

    def model_param_class(self) -> Type:
        return EMBEDDING_NAME_TO_PARAMETER_CLASS_CONFIG.get(
            self.model_name, EmbeddingModelParameters
        )

    def parse_parameters(
        self, command_args: List[str] = None
    ) -> BaseEmbeddingModelParameters:
        param_cls = self.model_param_class()
        return _parse_embedding_params(
            model_name=self.model_name,
            model_path=self.model_path,
            command_args=command_args,
            param_cls=param_cls,
        )

    def start(
        self,
        model_params: EmbeddingModelParameters = None,
        command_args: List[str] = None,
    ) -> None:
        """Start model worker"""
        if not model_params:
            model_params = self.parse_parameters(command_args)
        self._model_params = model_params
        self._embeddings_impl = self._loader.load(self.model_name, model_params)

    def __del__(self):
        self.stop()

    def stop(self) -> None:
        if not self._embeddings_impl:
            return
        del self._embeddings_impl
        self._embeddings_impl = None
        _clear_model_cache(self._model_params.device)

    def generate_stream(self, params: Dict):
        """Generate stream result, chat scene"""
        raise NotImplementedError("Not supported generate_stream for embeddings model")

    def generate(self, params: Dict):
        """Generate non stream result"""
        raise NotImplementedError("Not supported generate for embeddings model")

    def count_token(self, prompt: str) -> int:
        raise NotImplementedError("Not supported count_token for embeddings model")

    def get_model_metadata(self, params: Dict) -> ModelMetadata:
        raise NotImplementedError(
            "Not supported get_model_metadata for embeddings model"
        )

    def embeddings(self, params: Dict) -> List[List[float]]:
        model = params.get("model")
        logger.info(f"Receive embeddings request, model: {model}")
        input: List[str] = params["input"]
        print('self._embeddings_impl.__dict__',self._embeddings_impl,self._embeddings_impl.__dict__,'params workder ',params)
        return self._embeddings_impl.embed_documents(input)

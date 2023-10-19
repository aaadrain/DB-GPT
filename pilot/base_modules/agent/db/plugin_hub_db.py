from datetime import datetime
import pytz
from typing import List
from sqlalchemy import Column, Integer, String, Index, DateTime, func, Boolean
from sqlalchemy import UniqueConstraint
from pilot.base_modules.meta_data.meta_data import Base

from pilot.base_modules.meta_data.base_dao import BaseDao
from pilot.base_modules.meta_data.meta_data import Base, engine, session


class PluginHubEntity(Base):
    __tablename__ = "plugin_hub"
    id = Column(
        Integer, primary_key=True, autoincrement=True, comment="autoincrement id"
    )
    name = Column(String(255), unique=True, nullable=False, comment="plugin name")
    description = Column(String(255), nullable=False, comment="plugin description")
    author = Column(String(255), nullable=True, comment="plugin author")
    email = Column(String(255), nullable=True, comment="plugin author email")
    type = Column(String(255), comment="plugin type")
    version = Column(String(255), comment="plugin version")
    storage_channel = Column(String(255), comment="plugin storage channel")
    storage_url = Column(String(255), comment="plugin download url")
    download_param = Column(String(255), comment="plugin download param")
    created_at = Column(DateTime, default=datetime.utcnow, comment="plugin upload time")
    installed = Column(Integer, default=False, comment="plugin already installed count")

    __table_args__ = (
        UniqueConstraint("name", name="uk_name"),
        Index("idx_q_type", "type"),
    )


class PluginHubDao(BaseDao[PluginHubEntity]):
    def __init__(self):
        super().__init__(
            database="dbgpt", orm_base=Base, db_engine=engine, session=session
        )

    def add(self, engity: PluginHubEntity):
        session = self.get_session()
        timezone = pytz.timezone("Asia/Shanghai")
        plugin_hub = PluginHubEntity(
            name=engity.name,
            author=engity.author,
            email=engity.email,
            type=engity.type,
            version=engity.version,
            storage_channel=engity.storage_channel,
            storage_url=engity.storage_url,
            created_at=timezone.localize(datetime.now()),
        )
        session.add(plugin_hub)
        session.commit()
        id = plugin_hub.id
        session.close()
        return id

    def update(self, entity: PluginHubEntity):
        session = self.get_session()
        try:
            updated = session.merge(entity)
            session.commit()
            return updated.id
        finally:
            session.close()

    def list(
        self, query: PluginHubEntity, page=1, page_size=20
    ) -> list[PluginHubEntity]:
        session = self.get_session()
        plugin_hubs = session.query(PluginHubEntity)
        all_count = plugin_hubs.count()

        if query.id is not None:
            plugin_hubs = plugin_hubs.filter(PluginHubEntity.id == query.id)
        if query.name is not None:
            plugin_hubs = plugin_hubs.filter(PluginHubEntity.name == query.name)
        if query.type is not None:
            plugin_hubs = plugin_hubs.filter(PluginHubEntity.type == query.type)
        if query.author is not None:
            plugin_hubs = plugin_hubs.filter(PluginHubEntity.author == query.author)
        if query.storage_channel is not None:
            plugin_hubs = plugin_hubs.filter(
                PluginHubEntity.storage_channel == query.storage_channel
            )

        plugin_hubs = plugin_hubs.order_by(PluginHubEntity.id.desc())
        plugin_hubs = plugin_hubs.offset((page - 1) * page_size).limit(page_size)
        result = plugin_hubs.all()
        session.close()

        total_pages = all_count // page_size
        if all_count % page_size != 0:
            total_pages += 1

        return result, total_pages, all_count

    def get_by_storage_url(self, storage_url):
        session = self.get_session()
        plugin_hubs = session.query(PluginHubEntity)
        plugin_hubs = plugin_hubs.filter(PluginHubEntity.storage_url == storage_url)
        result = plugin_hubs.all()
        session.close()
        return result

    def get_by_name(self, name: str) -> PluginHubEntity:
        session = self.get_session()
        plugin_hubs = session.query(PluginHubEntity)
        plugin_hubs = plugin_hubs.filter(PluginHubEntity.name == name)
        result = plugin_hubs.first()
        session.close()
        return result

    def count(self, query: PluginHubEntity):
        session = self.get_session()
        plugin_hubs = session.query(func.count(PluginHubEntity.id))
        if query.id is not None:
            plugin_hubs = plugin_hubs.filter(PluginHubEntity.id == query.id)
        if query.name is not None:
            plugin_hubs = plugin_hubs.filter(PluginHubEntity.name == query.name)
        if query.type is not None:
            plugin_hubs = plugin_hubs.filter(PluginHubEntity.type == query.type)
        if query.author is not None:
            plugin_hubs = plugin_hubs.filter(PluginHubEntity.author == query.author)
        if query.storage_channel is not None:
            plugin_hubs = plugin_hubs.filter(
                PluginHubEntity.storage_channel == query.storage_channel
            )
        count = plugin_hubs.scalar()
        session.close()
        return count

    def delete(self, plugin_id: int):
        session = self.get_session()
        if plugin_id is None:
            raise Exception("plugin_id is None")
        plugin_hubs = session.query(PluginHubEntity)
        if plugin_id is not None:
            plugin_hubs = plugin_hubs.filter(PluginHubEntity.id == plugin_id)
        plugin_hubs.delete()
        session.commit()
        session.close()

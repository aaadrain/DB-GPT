��    :      �  O   �      �     �  L     C   O     �     �     �  @   �          %     ?     ^     z     �     �     �     �  t   �  O   c  2   �     �  >     �   A  ?   �     	     .	  &   D	  F   k	  �   �	  �   f
  .     5   L     �     �     �     �     �     �     �                1     N     h     �     �     �     �     �     �          1     P     j     �     �  %   �     �  1  �  	     U   '  c   }      �       "     _   :     �  #   �  *   �  $         '  '   H     p     �     �  �   �  q   T  E   �  "     W   /  �   �  c   F     �  $   �  5   �  m   "  �   �  �   V  Y   0  <   �     �     �     �       ,   )  2   V  3   �  6   �  6   �  ;   +  ,   g  8   �  /   �  5   �  8   3  /   l  ;   �  +   �  *     @   /  8   p  &   �  *   �  #   �  6     )   V     (           )   8              %      ,      4           *                            7                #   -   +   "   6      .   :                         9                                             $      2       0   &                 !   3   5      /   
   1      '          	    API keys Configuration hooks, which will be executed before the configuration loading Database connection config, now support SQLite, OceanBase and MySQL Global tracer configuration Language setting Logging configuration Logging configuration for web server, if None, use global config Logging level Model cache configuration Model deployment configuration Model service configuration Rag Knowledge Parameters Run Webserver in light mode Serve configuration Storage configuration System configuration The Model controller address to connect. If None, read model controller address from environment key `MODEL_SERVER`. The default thread pool size, If None, use default config of python thread pool The directories to search awel files, split by `,` The key to encrypt the data The max sequence length of the embedding model, default is 512 The storage type of model configures, if None, use the default storage(current database). When you run in light mode, it will not use any storage. Tracer config for web server, if None, use global tracer config Web service configuration Webserver deploy host Webserver deploy port, default is 5670 Whether to disable alembic to initialize and upgrade database metadata Whether to enable remote embedding models. If it is True, you need to start a embedding model through `dbgpt start worker --worker_type text2vec --model_name xxx --model_path xxx` Whether to enable remote rerank models. If it is True, you need to start a rerank model through `dbgpt start worker --worker_type text2vec --rerank --model_name xxx --model_path xxx` Whether to use the new web UI, default is True Whether to verify the SSL certificate of the database bm25_b bm25_k1 default graph type default vector type graph community summary enabled kg community top k kg extract llm model kg extract score threshold kg_chunk_search_top_k kg_community_score_threshold kg_document_graph_enabled kg_embedding_batch_size kg_enable_text_search kg_extraction_batch_size kg_similarity_score_threshold kg_similarity_top_k kg_text2gql_model_enabled kg_triplet_graph_enabled knowledge graph search top k knowledge max chunks once load knowledge max load thread knowledge rerank top k knowledge search rewrite knowledge search top k knowledge search top similarity score text2gql_model_name Project-Id-Version: PACKAGE VERSION
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2025-02-23 13:40+0800
Last-Translator: Automatically generated
Language-Team: none
Language: fr
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=2; plural=(n > 1);
 Clés API Hooks de configuration, qui seront exécutés avant le chargement de la configuration Configuration de connexion à la base de données, supporte actuellement SQLite, OceanBase et MySQL Configuration globale du traceur Paramètre de langue Configuration de la journalisation Configuration de journalisation pour le serveur web, si None, utilisez la configuration globale Niveau de journalisation Configuration du cache des modèles Configuration du déploiement des modèles Configuration du service de modèles Paramètres de connaissances RAG Exécuter le serveur web en mode léger Configuration du service Configuration de stockage Configuration du système Adresse du contrôleur de modèle à connecter. Si None, lire l'adresse du contrôleur de modèle à partir de la clé d'environnement `MODEL_SERVER`. La taille par défaut du pool de threads. Si None, utilise la configuration par défaut du pool de threads Python Les répertoires pour rechercher les fichiers awel, séparés par `,` La clé pour chiffrer les données La longueur maximale de séquence du modèle d'embedding, la valeur par défaut est 512 Le type de stockage des configurations de modèle, si None, utilise le stockage par défaut (base de données actuelle). Lorsque vous exécutez en mode léger, il n'utilisera aucun stockage. Configuration du traceur pour le serveur web, si None, utilisez la configuration globale du traceur Configuration du service web Hôte de déploiement du serveur web Port de déploiement du serveur web, par défaut 5670 Si oui ou non désactiver Alembic pour initialiser et mettre à jour les métadonnées de la base de données Si oui ou non activer les modèles d'embedding distants. Si c'est True, vous devez démarrer un modèle d'embedding via `dbgpt start worker --worker_type text2vec --model_name xxx --model_path xxx` Indique si les modèles de rerank à distance doivent être activés. Si c'est True, vous devez démarrer un modèle de rerank via `dbgpt start worker --worker_type text2vec --rerank --model_name xxx --model_path xxx` Indique si la nouvelle interface web doit être utilisée, la valeur par défaut est True S'il faut vérifier le certificat SSL de la base de données Paramètre b de BM25 Paramètre k1 de BM25 type de graphe par défaut type de vecteur par défaut résumé de la communauté du graphe activé Top k de la communauté du graphe de connaissances Modèle LLM d'extraction de graphe de connaissances Seuil de score d'extraction de graphe de connaissances Recherche top k de segments de graphe de connaissances Seuil de score de la communauté du graphe de connaissances Graphe de documents de connaissances activé Taille du lot d'incorporation de graphe de connaissances Activation de la recherche textuelle dans la KG Taille du lot d'extraction de graphe de connaissances Seuil de score de similarité de graphe de connaissances Top k de similarité de graphe de connaissances Activation du modèle de conversion texte en GQL pour la KG Graphe de triplets de connaissances activé recherche top k du graphe de connaissances nombre maximal de segments de connaissances chargés en une fois nombre maximal de threads de chargement de connaissances top k de reclassement de connaissances réécriture de recherche de connaissances top k de recherche de connaissances score de similarité top de recherche de connaissances Nom du modèle de conversion texte en GQL 
Þ    :      ì  O   ¼      ø     ù  L     C   O          ¯     À  @   Ö          %     ?     ^     z          ¯     Ã     Ù  t   î  O   c  2   ³     æ  >        A  ?   Ô     	     .	  &   D	  F   k	  ³   ²	  ¶   f
  .     5   L                    ¤     ¸     Ø     ë                1     N     h               ¯     Í     á     û          1     P     j            %   ±     ×  +  ë  
     6   "  h   Y  '   Â     ê     ÷  a        f  !   v          ±     Ð  1   ê          /     E  ­   X       P     !   å  S     è   [  w   D     ¼     Ö  B   ö  m   9  ß   §  ô     L   |  >   É          #  $   ?  '   d  *     $   ·  $   Ü       $     '   B  '   j  !     !   ´     Ö     õ       5   *  '   `  $     3   ­  *   á  '        4     P  '   l  )        (           )   8              %      ,      4           *                            7                #   -   +   "   6      .   :                         9                                             $      2       0   &                 !   3   5      /   
   1      '          	    API keys Configuration hooks, which will be executed before the configuration loading Database connection config, now support SQLite, OceanBase and MySQL Global tracer configuration Language setting Logging configuration Logging configuration for web server, if None, use global config Logging level Model cache configuration Model deployment configuration Model service configuration Rag Knowledge Parameters Run Webserver in light mode Serve configuration Storage configuration System configuration The Model controller address to connect. If None, read model controller address from environment key `MODEL_SERVER`. The default thread pool size, If None, use default config of python thread pool The directories to search awel files, split by `,` The key to encrypt the data The max sequence length of the embedding model, default is 512 The storage type of model configures, if None, use the default storage(current database). When you run in light mode, it will not use any storage. Tracer config for web server, if None, use global tracer config Web service configuration Webserver deploy host Webserver deploy port, default is 5670 Whether to disable alembic to initialize and upgrade database metadata Whether to enable remote embedding models. If it is True, you need to start a embedding model through `dbgpt start worker --worker_type text2vec --model_name xxx --model_path xxx` Whether to enable remote rerank models. If it is True, you need to start a rerank model through `dbgpt start worker --worker_type text2vec --rerank --model_name xxx --model_path xxx` Whether to use the new web UI, default is True Whether to verify the SSL certificate of the database bm25_b bm25_k1 default graph type default vector type graph community summary enabled kg community top k kg extract llm model kg extract score threshold kg_chunk_search_top_k kg_community_score_threshold kg_document_graph_enabled kg_embedding_batch_size kg_enable_text_search kg_extraction_batch_size kg_similarity_score_threshold kg_similarity_top_k kg_text2gql_model_enabled kg_triplet_graph_enabled knowledge graph search top k knowledge max chunks once load knowledge max load thread knowledge rerank top k knowledge search rewrite knowledge search top k knowledge search top similarity score text2gql_model_name Project-Id-Version: PACKAGE VERSION
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2025-02-23 13:40+0800
Last-Translator: Automatically generated
Language-Team: none
Language: ja
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=1; plural=0;
 API ã­ã¼ è¨­å®èª­ã¿è¾¼ã¿åã«å®è¡ãããè¨­å®ããã¯ ãã¼ã¿ãã¼ã¹æ¥ç¶è¨­å®ãç¾å¨ã¯ãSQLiteãOceanBaseãMySQLããµãã¼ããã¦ãã¾ãã ã°ã­ã¼ãã«ãã¬ã¼ãµã¼ã®è¨­å® è¨èªè¨­å® ã­ã°è¨­å® Webãµã¼ãã¼ã®ã­ã°è¨­å®ã§ããNoneã®å ´åãã°ã­ã¼ãã«è¨­å®ãä½¿ç¨ãã¾ãã ã­ã°ã¬ãã« ã¢ãã«ã­ã£ãã·ã¥ã®è¨­å® ã¢ãã«å±éã®è¨­å® ã¢ãã«ãµã¼ãã¹ã®è¨­å® RAG ç¥è­ãã©ã¡ã¼ã¿ Web ãµã¼ãã¼ãè»½éã¢ã¼ãã§å®è¡ãã ãµã¼ãã¹è¨­å® ã¹ãã¬ã¼ã¸è¨­å® ã·ã¹ãã è¨­å® æ¥ç¶ããã¢ãã«ã³ã³ãã­ã¼ã©ã®ã¢ãã¬ã¹ãNoneã®å ´åãç°å¢å¤æ° `MODEL_SERVER` ããã¢ãã«ã³ã³ãã­ã¼ã©ã®ã¢ãã¬ã¹ãèª­ã¿åãã¾ãã ããã©ã«ãã®ã¹ã¬ãããã¼ã«ãµã¤ãºãNone ã®å ´åã¯ãPython ã¹ã¬ãããã¼ã«ã®ããã©ã«ãè¨­å®ãä½¿ç¨ãã¾ã AWELãã¡ã¤ã«ãæ¤ç´¢ãããã£ã¬ã¯ããªã§ã`,` ã§åºåãã¾ãã ãã¼ã¿ãæå·åããã­ã¼ åãè¾¼ã¿ã¢ãã«ã®æå¤§ã·ã¼ã±ã³ã¹é·ãããã©ã«ãã¯ 512 ã§ãã ã¢ãã«è¨­å®ã®ã¹ãã¬ã¼ã¸ã¿ã¤ããNoneã®å ´åãããã©ã«ãã®ã¹ãã¬ã¼ã¸ï¼ç¾å¨ã®ãã¼ã¿ãã¼ã¹ï¼ãä½¿ç¨ãã¾ããã©ã¤ãã¢ã¼ãã§å®è¡ããå ´åã¯ãã¹ãã¬ã¼ã¸ãä½¿ç¨ãã¾ããã Web ãµã¼ãã¼ã®ãã¬ã¼ãµã¼è¨­å®ãNoneã®å ´åãã°ã­ã¼ãã«ãªãã¬ã¼ãµã¼è¨­å®ãä½¿ç¨ãã¾ãã Web ãµã¼ãã¹ã®è¨­å® Web ãµã¼ãã¼å±éãã¹ã Web ãµã¼ãã¼ã®ããã­ã¤ãã¼ããããã©ã«ãã¯ 5670 Alembicãç¡å¹ã«ãã¦ãã¼ã¿ãã¼ã¹ã®ã¡ã¿ãã¼ã¿ã®åæåã¨æ´æ°ãè¡ããªããã©ãã ãªã¢ã¼ãåãè¾¼ã¿ã¢ãã«ãæå¹ã«ãããã©ãããTrueã®å ´åã`dbgpt start worker --worker_type text2vec --model_name xxx --model_path xxx` ã§åãè¾¼ã¿ã¢ãã«ãèµ·åããå¿è¦ãããã¾ãã ãªã¢ã¼ãåã©ã³ã­ã³ã°ã¢ãã«ãæå¹ã«ãããã©ãããTrueã®å ´åã`dbgpt start worker --worker_type text2vec --rerank --model_name xxx --model_path xxx` ã§åã©ã³ã­ã³ã°ã¢ãã«ãèµ·åããå¿è¦ãããã¾ãã æ°ããWeb UIãä½¿ç¨ãããã©ãããããã©ã«ãã¯Trueã§ãã ãã¼ã¿ãã¼ã¹ã® SSL è¨¼ææ¸ãæ¤è¨¼ãããã©ãã BM25 ã® b ãã©ã¡ã¼ã¿ BM25 ã® k1 ãã©ã¡ã¼ã¿ ããã©ã«ãã®ã°ã©ãã¿ã¤ã ããã©ã«ãã®ãã¯ãã«ã¿ã¤ã ã°ã©ãã³ãã¥ããã£è¦ç´ãæå¹ KG ã³ãã¥ããã£ã®ä¸ä½ k ä»¶ KG æ½åºç¨ã® Large Language Model KG æ½åºã®ã¹ã³ã¢é¾å¤ KG ãã£ã³ã¯æ¤ç´¢ã®ä¸ä½ k ä»¶ KG ã³ãã¥ããã£ã®ã¹ã³ã¢é¾å¤ KG ãã­ã¥ã¡ã³ãã°ã©ããæå¹ KG åãè¾¼ã¿ããããµã¤ãº KG ãã­ã¹ãæ¤ç´¢ãæå¹å KG æ½åºã®ããããµã¤ãº KG é¡ä¼¼åº¦ã¹ã³ã¢é¾å¤ KG é¡ä¼¼åº¦ä¸ä½ k ä»¶ KG ãã­ã¹ããã GQL ã¸ã®ã¢ãã«ãæå¹å KG ããªãã¬ããã°ã©ããæå¹ ç¥è­ã°ã©ãæ¤ç´¢ã®ä¸ä½ k ä»¶ ä¸åº¦ã«èª­ã¿è¾¼ãç¥è­ã®æå¤§ãã£ã³ã¯æ° ç¥è­èª­ã¿è¾¼ã¿ã®æå¤§ã¹ã¬ããæ° ç¥è­åã©ã³ã­ã³ã°ã®ä¸ä½ k ä»¶ ç¥è­æ¤ç´¢ã®æ¸ãæã ç¥è­æ¤ç´¢ã®ä¸ä½ k ä»¶ ç¥è­æ¤ç´¢ã®é¡ä¼¼åº¦ã¹ã³ã¢ä¸ä½ ãã­ã¹ããã GQL ã¸ã®ã¢ãã«å 
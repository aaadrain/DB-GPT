import { createContext, useEffect, useMemo, useState ,useContext} from 'react';
import { apiInterceptors, getDialogueList, getUsableModels } from '@/client/api';
import { useRequest } from 'ahooks';
import { ChatHistoryResponse, DialogueListResponse, IChatDialogueSchema } from '@/types/chat';
import { useSearchParams } from 'next/navigation';
import { STORAGE_THEME_KEY } from '@/utils';
import { useRouter } from 'next/router';


type ThemeMode = 'dark' | 'light';

interface IChatContext {
  mode: ThemeMode;
  isContract?: boolean;
  isMenuExpand?: boolean;
  scene: IChatDialogueSchema['chat_mode'] | (string & {});
  chatId: string;
  userId: string;
  model: string;
  dbParam?: string;
  modelList: Array<string>;
  agent: string;
  dialogueList?: DialogueListResponse;
  setAgent?: (val: string) => void;
  setMode: (mode: ThemeMode) => void;
  setModel: (val: string) => void;
  setIsContract: (val: boolean) => void;
  setIsMenuExpand: (val: boolean) => void;
  setDbParam: (val: string) => void;
  queryDialogueList: () => void;
  refreshDialogList: () => void;
  currentDialogue?: DialogueListResponse[0];
  history: ChatHistoryResponse;
  setHistory: (val: ChatHistoryResponse) => void;
  docId?: number;
  setDocId: (docId: number) => void;
}

function getDefaultTheme(): ThemeMode {
  const theme = localStorage.getItem(STORAGE_THEME_KEY) as ThemeMode;
  if (theme) return theme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const ChatContext = createContext<IChatContext>({
  mode: 'light',
  scene: '',
  chatId: '',
  userId: '',
  modelList: [],
  model: '',
  dbParam: undefined,
  dialogueList: [],
  agent: '',
  setAgent: () => {},
  setModel: () => {},
  setIsContract: () => {},
  setIsMenuExpand: () => {},
  setDbParam: () => void 0,
  queryDialogueList: () => {},
  refreshDialogList: () => {},
  setMode: () => void 0,
  history: [],
  setHistory: () => {},
  docId: undefined,
  setDocId: () => {},
});

const ChatContextProvider = ({ children }: { children: React.ReactElement }) => {
  const searchParams = useSearchParams();
  const chatId = searchParams?.get('id') ?? '';
  const scene = searchParams?.get('scene') ?? '';
  const db_param = searchParams?.get('db_param') ?? '';
  const userId = searchParams?.get('userId') ?? searchParams?.get('userid') ?? '';
  console.log('userId',userId)
  const router = useRouter();

  const [isContract, setIsContract] = useState(false);
  const [model, setModel] = useState<string>('');
  const [isMenuExpand, setIsMenuExpand] = useState<boolean>(scene !== 'chat_dashboard');
  const [dbParam, setDbParam] = useState<string>(db_param);
  const [agent, setAgent] = useState<string>('');
  const [history, setHistory] = useState<ChatHistoryResponse>([]);
  const [docId, setDocId] = useState<number>();
  const [mode, setMode] = useState<ThemeMode>('light');

  const {
    run: queryDialogueList,
    data: dialogueList = [],
    refresh: refreshDialogList,
  } = useRequest(
    async () => {
      const [, res] = await apiInterceptors(getDialogueList(userId));
      return res ?? [];
    },
    {
      manual: true,
      refreshDeps: [userId], // Add userId to refreshDeps array
    },
  );



  useEffect(() => {
    if (dialogueList.length && scene === 'chat_agent') {
      const agent = dialogueList.find((item) => item.conv_uid === chatId)?.select_param;
      agent && setAgent(agent);
    }
  }, [dialogueList, scene, chatId]);

  const { data: modelList = [] } = useRequest(async () => {
    const [, res] = await apiInterceptors(getUsableModels());
    return res ?? [];
  });

  useEffect(() => {
    setMode(getDefaultTheme());
  }, []);

  useEffect(() => {
    setModel(modelList[0]);
  }, [modelList, modelList?.length]);

  useEffect(() => {
    // Add userId to the dependency array so queryDialogueList runs when userId changes
    queryDialogueList();
  }, [userId]); // queryDialogueList will be called again when userId changes

  const currentDialogue = useMemo(() => dialogueList.find((item: any) => item.conv_uid === chatId), [chatId, dialogueList]);


  const contextValue = {
    isContract,
    isMenuExpand,
    scene,
    chatId,
    userId : router.query.userId || router.query.userid,
    modelList,
    model,
    dbParam: dbParam || db_param,
    dialogueList,
    agent,
    setAgent,
    mode,
    setMode,
    setModel,
    setIsContract,
    setIsMenuExpand,
    setDbParam,
    queryDialogueList,
    refreshDialogList,
    currentDialogue,
    history,
    setHistory,
    docId,
    setDocId,
  };

  return <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>;
};
export { ChatContext, ChatContextProvider };

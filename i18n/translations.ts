export type Language = 'en' | 'zh' | 'ja';

export interface Translations {
  // Menu titles
  gameTitle: string;
  gameSubtitle: string;

  // Main menu
  playVsComputer: string;
  localOneVsOne: string;
  onlineMultiplayer: string;
  onlineLobby: string;

  // Difficulty selection
  selectDifficulty: string;
  chooseDifficulty: string;
  difficultyEasy: string;
  difficultyMedium: string;
  difficultyHard: string;
  difficultyEasyDesc: string;
  difficultyMediumDesc: string;
  difficultyHardDesc: string;

  // Lobby
  back: string;
  hostARoom: string;
  createRoom: string;
  shareRoomId: string;
  yourRoomId: string;
  copyRoomId: string;
  copied: string;
  copiedToClipboard: string;
  waitingForPlayer: string;
  waitingForOpponent: string;
  cancel: string;
  or: string;
  availableRooms: string;
  noRoomsAvailable: string;
  createRoomToStart: string;
  connectingToHost: string;
  pleaseWait: string;
  playersCount: string;

  // In-game HUD
  currentTurn: string;
  black: string;
  white: string;
  stoneCount: string;
  of: string;
  playingAs: string;
  modeVsComputer: string;
  roomId: string;
  copy: string;

  // Game controls
  resetView: string;
  thinking: string;
  exitGame: string;

  // Game end
  wins: string;
  victory: string;
  opponentWantsRematch: string;
  clickToAccept: string;
  waitingForOpponentDecision: string;
  opponentReady: string;
  clickToStart: string;
  opponentViewing: string;
  waitingForDecision: string;
  playAgain: string;
  acceptAndPlayAgain: string;
  mainMenu: string;
  gameEnded: string;
  readyForNext: string;

  // Language selector
  language: string;
  english: string;
  chinese: string;
  japanese: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    gameTitle: 'Connect 6 Master',
    gameSubtitle: 'First to connect 6 stones wins.',

    playVsComputer: 'Play vs Computer',
    localOneVsOne: 'Local 1v1',
    onlineMultiplayer: 'Online Multiplayer',
    onlineLobby: 'Online Lobby',

    selectDifficulty: 'Select Difficulty',
    chooseDifficulty: 'Choose your challenge level',
    difficultyEasy: 'Easy',
    difficultyMedium: 'Medium',
    difficultyHard: 'Hard',
    difficultyEasyDesc: 'Casual play, makes mistakes',
    difficultyMediumDesc: 'Balanced strategy, good for practice',
    difficultyHardDesc: 'Expert AI, no mercy!',

    back: 'Back',
    hostARoom: 'Host a Room',
    createRoom: 'Create Room',
    shareRoomId: 'Share your Room ID with a friend to start playing',
    yourRoomId: 'Your Room ID',
    copyRoomId: 'Copy Room ID',
    copied: 'Copied',
    copiedToClipboard: 'Copied to Clipboard',
    waitingForPlayer: 'Waiting for Player',
    waitingForOpponent: 'Waiting for opponent to join...',
    cancel: 'Cancel',
    or: 'or',
    availableRooms: 'Available Rooms',
    noRoomsAvailable: 'No rooms available',
    createRoomToStart: 'Create a room to start playing!',
    connectingToHost: 'Connecting to host...',
    pleaseWait: 'Please wait...',
    playersCount: 'Players',

    currentTurn: 'Current Turn',
    black: 'Black',
    white: 'White',
    stoneCount: 'Stone',
    of: 'of',
    playingAs: 'Playing as',
    modeVsComputer: 'Mode: vs Computer',
    roomId: 'Room ID',
    copy: 'Copy',

    resetView: 'Reset View',
    thinking: 'Thinking...',
    exitGame: 'Exit Game',

    wins: 'Wins!',
    victory: 'Victory achieved by connecting 6 stones.',
    opponentWantsRematch: 'Opponent wants to play again. Click "Play Again" to accept.',
    clickToAccept: 'Click "Play Again" to start next round',
    waitingForOpponentDecision: 'Waiting for opponent...',
    opponentReady: 'Opponent is ready!',
    clickToStart: 'Click "Play Again" to start next round',
    opponentViewing: 'Opponent is viewing the board',
    waitingForDecision: 'Waiting for their decision',
    playAgain: 'Play Again',
    acceptAndPlayAgain: 'Accept & Play Again',
    mainMenu: 'Main Menu',
    gameEnded: 'Game ended - Ready for next round?',
    readyForNext: "You're ready for next round",

    language: 'Language',
    english: 'English',
    chinese: '简体中文',
    japanese: '日本語',
  },

  zh: {
    gameTitle: '六子棋大师',
    gameSubtitle: '率先连成6子者获胜',

    playVsComputer: '人机对战',
    localOneVsOne: '本地对战',
    onlineMultiplayer: '在线多人',
    onlineLobby: '在线大厅',

    selectDifficulty: '选择难度',
    chooseDifficulty: '选择你的挑战等级',
    difficultyEasy: '简单',
    difficultyMedium: '中等',
    difficultyHard: '困难',
    difficultyEasyDesc: '休闲玩法，会出错',
    difficultyMediumDesc: '均衡策略，适合练习',
    difficultyHardDesc: '专家级AI，毫不留情！',

    back: '返回',
    hostARoom: '创建房间',
    createRoom: '创建房间',
    shareRoomId: '将房间ID分享给朋友以开始游戏',
    yourRoomId: '你的房间ID',
    copyRoomId: '复制房间ID',
    copied: '已复制',
    copiedToClipboard: '已复制到剪贴板',
    waitingForPlayer: '等待玩家',
    waitingForOpponent: '等待对手加入...',
    cancel: '取消',
    or: '或',
    availableRooms: '可用房间',
    noRoomsAvailable: '暂无可用房间',
    createRoomToStart: '创建一个房间开始游戏！',
    connectingToHost: '正在连接主机...',
    pleaseWait: '请稍候...',
    playersCount: '玩家',

    currentTurn: '当前回合',
    black: '黑方',
    white: '白方',
    stoneCount: '第',
    of: '/',
    playingAs: '你是',
    modeVsComputer: '模式：人机对战',
    roomId: '房间ID',
    copy: '复制',

    resetView: '重置视角',
    thinking: '思考中...',
    exitGame: '退出游戏',

    wins: '获胜！',
    victory: '连成6子获得胜利',
    opponentWantsRematch: '对手想再来一局。点击"再来一局"接受。',
    clickToAccept: '点击"再来一局"开始下一局',
    waitingForOpponentDecision: '等待对手...',
    opponentReady: '对手已准备好！',
    clickToStart: '点击"再来一局"开始下一局',
    opponentViewing: '对手正在查看棋盘',
    waitingForDecision: '等待对手决定',
    playAgain: '再来一局',
    acceptAndPlayAgain: '接受并再来一局',
    mainMenu: '主菜单',
    gameEnded: '游戏结束 - 准备好下一局了吗？',
    readyForNext: '你已准备好下一局',

    language: '语言',
    english: 'English',
    chinese: '简体中文',
    japanese: '日本語',
  },

  ja: {
    gameTitle: '六目並べマスター',
    gameSubtitle: '先に6つ並べた方が勝ち',

    playVsComputer: 'コンピュータと対戦',
    localOneVsOne: 'ローカル対戦',
    onlineMultiplayer: 'オンライン対戦',
    onlineLobby: 'オンラインロビー',

    selectDifficulty: '難易度選択',
    chooseDifficulty: 'チャレンジレベルを選択',
    difficultyEasy: '簡単',
    difficultyMedium: '普通',
    difficultyHard: '難しい',
    difficultyEasyDesc: 'カジュアルプレイ、ミスあり',
    difficultyMediumDesc: 'バランス型、練習に最適',
    difficultyHardDesc: 'エキスパートAI、容赦なし！',

    back: '戻る',
    hostARoom: 'ルーム作成',
    createRoom: 'ルーム作成',
    shareRoomId: 'ルームIDを友達と共有してゲーム開始',
    yourRoomId: 'あなたのルームID',
    copyRoomId: 'ルームIDをコピー',
    copied: 'コピー済み',
    copiedToClipboard: 'クリップボードにコピーしました',
    waitingForPlayer: 'プレイヤー待機中',
    waitingForOpponent: '対戦相手の参加を待っています...',
    cancel: 'キャンセル',
    or: 'または',
    availableRooms: '利用可能なルーム',
    noRoomsAvailable: 'ルームがありません',
    createRoomToStart: 'ルームを作成してゲーム開始！',
    connectingToHost: 'ホストに接続中...',
    pleaseWait: 'お待ちください...',
    playersCount: 'プレイヤー',

    currentTurn: '現在のターン',
    black: '黒',
    white: '白',
    stoneCount: '石',
    of: '/',
    playingAs: 'あなた',
    modeVsComputer: 'モード：vs コンピュータ',
    roomId: 'ルームID',
    copy: 'コピー',

    resetView: '視点リセット',
    thinking: '思考中...',
    exitGame: 'ゲーム終了',

    wins: '勝利！',
    victory: '6つ並べて勝利達成',
    opponentWantsRematch: '対戦相手が再戦を希望しています。「もう一度」をクリックして受け入れてください。',
    clickToAccept: '「もう一度」をクリックして次のラウンドを開始',
    waitingForOpponentDecision: '対戦相手を待っています...',
    opponentReady: '対戦相手の準備完了！',
    clickToStart: '「もう一度」をクリックして次のラウンドを開始',
    opponentViewing: '対戦相手がボードを確認中',
    waitingForDecision: '相手の決定を待っています',
    playAgain: 'もう一度',
    acceptAndPlayAgain: '受け入れてもう一度',
    mainMenu: 'メインメニュー',
    gameEnded: 'ゲーム終了 - 次のラウンドの準備はいいですか？',
    readyForNext: '次のラウンドの準備完了',

    language: '言語',
    english: 'English',
    chinese: '简体中文',
    japanese: '日本語',
  },
};

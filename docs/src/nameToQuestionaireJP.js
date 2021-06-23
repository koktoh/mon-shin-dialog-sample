//------------------------------------------------------------------------------------------
// 各 DOM の Name 属性と投稿文で使う質問の関連付け
//----------------------------------------------------------------------------------------- 
const nameToQuestionaireJP = new Map([
	['keyboardName', 'キーボード名'],
	['buildGuideURL', 'ビルドガイドのURL'],
	['kicadFileURL', 'KiCadファイルのURL'],
	['microcontroller', 'マイコンの種類'],
	['microcontrollerName', 'マイコン名'],
	['connection', 'PCとキーボードの接続方法'],
	['keyboardForm', '分割型キーボードか'],
	['socket', 'キースイッチ用のソケットの使用状況'],
	['wiring', '配線方法'],
	['osName', 'OS名'],
	['windowsVersionInput', 'Windowsのバージョン'],
	['windowsWSL2', 'WSL2を使っていますか'],
	['windowsTerminalSoftInput', 'Windowsのターミナルソフト'],
	['macosVersionInput', 'MacOSのバージョン'],
	['linuxDistributionInput', 'Linuxのディストリビューション'],
	['dockerCheckbox', 'ファームウェアのビルドで Docker を使っていますか'],
	['keyboardLayout', 'OS側のキーボードの配列認識'],
	['keyInputProblem', 'キー入力関連の問題'],
	['noInput', 'キーを押しても反応しない'],
	['noInputTextarea', '反応しないキーの説明'],
	['notExpect', '設定と異なるキーが入力される'],
	['notExpectTextarea', '設定と異なるキーの状況'],
	['notActionOneHand', '左右分離型で片方だけ反応しない'],
	['notActionOneHandTextarea', '左右のどちらをPCに接続しているか、左右のどちらが反応しないか。'],
	['writeErrorQmk', 'ファームウェアを書き込めない'],
	['writingToolLog', 'ファームウェア書き込みツールのログ'],
	['buildErrorQmk', 'ファームウェアをビルドできない'],
	['buildLog', 'ファームウェアビルド時のログ'],
	['environmentErrorQmk', 'ファームウェアのビルド環境を構築できない'],
  ['environmentLog', 'ビルド環境構築時のログ'],
	['ledOff', 'LEDが点灯しない'],
	['ledOffTextarea', '点灯しないledの箇所'],
	['otherProblem', '上記以外の問題（トラックボールが動かない、ランドが剥がれた etc）'],
	['otherProblemTextarea', '問題の内容'],
	['whenProblemOccur', 'いつ不具合が発生するか'],
	['detail', 'これまでに行った作業の内容'],
	['writingTool', '書き込みツール'],
	['testProMicroOnly', 'コンスルー（スプリングピンヘッダ）を利用している場合、基板から Pro Micro を取り外して Pro Micro だけ USB 接続した場合にキーボードとして認識されますか？'],
	['haveTester', 'テスターを持っていますか？'],
]);

export {nameToQuestionaireJP};
# 1.アプリ名

「家事管理アプリ」 – 家事の予定を簡単に管理するモバイルアプリ

# 2.概要
家事のスケジュール管理が煩雑になりがちな家庭だけでなく、一人暮らしで部屋の管理をつい忘れてしまいがちな人にも向けて、シンプルかつ見やすいUIで家事の予定を手軽に管理できるアプリを作成した。
React Native を使用し、iOS・Android 両方で動作するクロスプラットフォームのモバイルアプリとして開発した。
開発期間は約2週間で、主に夜間や週末に個人で取り組みました。

# 3.使用技術
### フレームワーク・言語
- React Native(Expo)
- JavaScript（ES6）
### UI・ナビゲーション
- React Navigation（タブナビゲーション）
- @expo/vector-icons（アイコン表示）
- react-native-picker-select（ドロップダウン選択）
### 状態管理・React構文
- React Hooks（useState, useEffect）
- React Context API（グローバル状態の共有）
- props（親子コンポーネント間のデータ受け渡し）
### 外部連携・API
- OpenWeatherMap API（天気取得）
- expo-location(端末の現在地の取得)
### その他ユーティリティ
- react-native-uuid（ユニークID生成）
- AsyncStorage（ローカルストレージ）

# 4.主な機能

- 家事の追加（家事名の入力、カテゴリー、曜日を指定）
- 今日の家事の内容、次回の家事が何曜日にあるかをホーム画面に表示
- 今日の日付、今日の天気をホーム画面に表示
- 家事をする際に手軽に使用できる10分タイマー
- 曜日順に自動で並び替えられる家事リスト
- 曜日ごとに色分けされたリスト
- 非同期ストレージを用いたリストの状態管理

# 5.工夫した点、課題の解決方法

### uuidの導入による、FlatListの安定性の向上
#### 背景・課題
家事管理アプリのタスク一覧を表示する際、FlatListコンポーネントを用いてリストをレンダリングした。当初、リストのkeyにindexを使用していたため、スクロール中にタスクを削除すると意図しない別のタスクが削除されるバグが発生した。
#### 解決策
各タスクにランダムな一意のID（UUID）を付与し、以下のようにリストの識別子として使用しました。

```
import uuid from 'react-native-uuid';

setHouseworkList([...houseworkList, { id: uuid.v4() ,text, category, week }]);

```

```
<FlatList
   data={[...houseworkList].sort((a, b) => {
      const weekOrder = {
         '月曜日': 0,
         '火曜日': 1,
         '水曜日': 2,
         '木曜日': 3,
         '金曜日': 4,
         '土曜日': 5,
         '日曜日': 6,
         };
         return weekOrder[a.week] - weekOrder[b.week];
      })}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()} 
      contentContainerStyle={{ paddingTop: 20 }}
/>

```

また、削除操作でも index ではなく id を基準にすることで、誤削除のリスクをなくした。

#### 成果
スクロール中でも安定して正しいタスクが削除されるようになった。


# 6.スクリーンショット


# 7.GitHub リンク 

# 8.まとめ


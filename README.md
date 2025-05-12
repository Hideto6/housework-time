# 1.アプリ名
「家事タイム」 – 家事の予定を簡単に管理するモバイルアプリ

# 2.概要
　家事のスケジュール管理が煩雑になりがちな家庭だけでなく、一人暮らしで部屋の管理をつい忘れてしまいがちな人にも向けて、シンプルかつ見やすいUIで家事の予定を手軽に管理できるアプリを作成した。
フレームワークはReact Nativeを使用し、開発期間は約2週間で、主に夜間や週末に個人で取り組んだ。

# 3.使用技術
### フレームワーク・言語
- React Native(Expo)
- JavaScript（ES6）
### UI・ナビゲーション
- React Navigation（タブナビゲーション）
- @expo/vector-icons（アイコン表示）
- react-native-picker-select（ドロップダウン選択）
### 状態管理
- React Context API（グローバル状態の共有）
### React構文
- props（親子コンポーネント間のデータ受け渡し）
- React Hooks（useState, useEffect）
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

# 5.工夫した点、課題解決

### [uuidの導入による、FlatListの安定性の向上]
#### 背景・課題
　家事管理アプリのタスク一覧を表示する際、FlatListコンポーネントを用いてリストをレンダリングした。当初、リストのkeyにindexを使用していたため、スクロール中にタスクを削除すると意図しない別のタスクが削除されるバグが発生した。
#### 解決策
　各タスクにランダムな一意のID（UUID）を付与し、以下のようにリストの識別子として使用した。

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

### [位置情報を利用した天気情報の取得機能の実装]
#### 背景・課題
　ユーザーにその日の家事を促すためには、当日の環境情報を提供することでより便利なアプリができると考えた。特に洗濯など天候に左右されやすい家事では、天気情報の有無が重要なため、天気情報を取得することを考えた。
#### 解決策
　React Nativeのexpo-locationを用いて位置情報を取得し、OpenWeatherMap APIを使用してその地点の天気をリアルタイムで取得する処理をuseEffectで実装した。
```
useEffect(() => {
   const fetchWeather = async () => {
         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== 'granted') return;

            let location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric&lang=ja`
            );
            const data = await response.json();
            setWeather(data);
      };
      fetchWeather();
    }, []);
```
また、取得した天気情報の種類（晴れ、曇り、雨）に応じて、アイコンを切り替えて表示することで視覚的に情報を伝えられるUIとした。
#### 成果
　アプリ起動時にユーザーの現在位置から天気情報が自動で表示されるようになり、その日の家事を計画する際の参考になる情報を提供できた。
これにより、ユーザーは日々の生活環境に即した行動が取りやすくなり、アプリの利便性が向上した。

# 6.スクリーンショット
<p align="center">
  <img src="./assets/images/home.jpg" alt="home" width="45%" />
  <img src="./assets/images/setting.jpg" alt="setting" width="45%" />
</p>

# 7.まとめ
　本アプリ「家事タイム」は、日々の家事を効率よく管理し、生活の質を高めることを目的に開発した。開発を通して、状態管理や外部APIとの連携など、実用的な技術スキルを身につけることができた。また、バグの発見と解決を繰り返すことで、デバッグ力や問題解決力が向上し、React Nativeにおけるコンポーネント構造の理解も深まった。さらに、友人から「家族などとタスクを共有できたらもっと便利」といったフィードバックをもらったことをきっかけに、家事リストの共有機能の追加も検討している。今後は、通知機能や家事の履歴確認画面なども導入し、より便利で継続的に使いたくなるアプリに成長させていきたい。

import Http from "../../service/http";

const articleToday = async () =>  await Http.get("https://interface.meiriyiwen.com/article/today?dev=1")
const articleRandom = async () =>  await Http.get("https://interface.meiriyiwen.com/article/random?dev=1")

const actionCreators = {
    articleToday,
    articleRandom
}
export default actionCreators
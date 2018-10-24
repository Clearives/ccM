import Http from "../../service/http";

const articleToday = () =>  Http.get("https://interface.meiriyiwen.com/article/today?dev=1")

export default {articleToday}
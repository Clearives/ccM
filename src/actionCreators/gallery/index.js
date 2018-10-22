import Http from "../../service/http";

const galleryCategory = () =>  Http.get("http://service.picasso.adesk.com/v1/vertical/category?adult=false&first=1")

export default {galleryCategory}
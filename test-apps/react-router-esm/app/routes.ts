import { route } from "@react-router/dev/routes";

export default [
	route("/", "./routes/_index.tsx"),
	route("/detail", "./routes/detail.tsx"),
	route("/detail/info", "./routes/detail.info.tsx"),
	route("/detail/more", "./routes/detail.more.tsx"),
]
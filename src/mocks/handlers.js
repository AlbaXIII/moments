import { rest } from "msw";

const baseURL = "https://drf-api-albadev-0e5d6dc78b06.herokuapp.com/";

export const handlers = [
    rest.get (`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 2,
                username: "bob",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 2,
                profile_image: "https://res.cloudinary.com/di3x6qyfa/image/upload/v1/media/../default_profile_vjtjxq"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200));
    }),
];
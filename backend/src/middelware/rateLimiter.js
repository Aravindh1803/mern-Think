import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {

    try {
        const { success } = await ratelimit.limit("my_limit_key")

        if (!success) {
            return res.status(429).json({
                message: "too many request, pls try later"
            })
        } next()
    } catch (error) {
        console.log("rate limit error", error)
        next(error)
    }
}


export default rateLimiter;
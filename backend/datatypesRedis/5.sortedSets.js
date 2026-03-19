import client from "../clients.js";

async function init() {
    // add members (score, member)
    await client.zadd("leaderboard", 
        10, "nani",
        20, "jai",
        15, "suriya"
    );

    // aet all sorted by score
    const result = await client.zrange("leaderboard", 0, -1);

    console.log("Leaderboard:", result);
}

init();
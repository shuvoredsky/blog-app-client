export const dynamic = "force-dynamic"


export default async function Blogpage(){

    await new Promise((resolve)=> setTimeout(resolve, 4000))

    throw new Error("Something went wrong")

    return(
        <div>
        <h1>This is About page component</h1>
        </div>
    );
}
import {writeFile} from 'fs'

export const htmlGenerator = async (arrayOfEmployees) => {


    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Team</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<header class="bg-red-600 flex justify-center items-center h-16">
    <div>My Team</div>
</header>

<main class="grid grid-cols-3 gap-8 ">
    <div class="bg-gray-100 drop-shadow-xl">
        <div class="bg-blue-600 text-white">
            <p>NAME</p>
            <p>ROLE</p>
        </div>
        <div>
            <div class="flex justify-center items-center flex-col ">
                <div class="m-4 bg-white rounded-md border-gray-500 border-solid border-2">
                    <p class="pl-4 pr-4 border-gray-500 border-solid border-b-2">ID:123</p>

                    <p class="pl-4 pr-4 border-gray-500 border-solid border-b-2">
                        EMAIL:
                        <a href="mailto:email">123</a>
                    </p>
                    <p class="pl-4 pr-4">OFFICE NUMBER:123</p>
                </div>
            </div>
        </div>
    </div>


</main>
</body>
</html>`


    try {
        await writeFile("../dist/index.html", html)
        console.log("Website has been successfully generated")
    } catch (e) {
        console.log(e)
    }
}
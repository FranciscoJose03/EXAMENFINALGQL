export const getjson1 = async(numero: string) => {
    const BASE_URL = "https://api.api-ninjas.com/v1/"
    const API_KEY = Deno.env.get("NINJA_KEY")
    if(!API_KEY){throw new Error ("Falta la api key")}
    const url = `${BASE_URL}validatephone?number=${numero}`
    const data = await fetch(url, {headers: {"X-Api-Key": API_KEY} } ) // "zFVGQOpWcbW1Idwkx/FC0Q==YcpEaoNW4Gf9R83w"
    const json = await data.json()
    return json
}

export const getdatetime = async(ciudad: string) => {
    const BASE_URL2 = "https://api.api-ninjas.com/v1/"
    const API_KEY = Deno.env.get("NINJA_KEY")
    if(!API_KEY){throw new Error ("Falta la api key")}
    const url2 = `${BASE_URL2}worldtime?city=${ciudad}`
    const data2 = await fetch(url2, {headers: {"X-Api-Key": API_KEY} } )
    const json2 = await data2.json()
    return json2.datetime.split(" ")[1]
}

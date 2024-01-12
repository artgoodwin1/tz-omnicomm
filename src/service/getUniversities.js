export async function getUniversities(value) {
    try {
        const data = await fetch(
            `http://universities.hipolabs.com/search?country=${value}`,
            {
                method: "GET",
            }
        );
        const response = await data.json();
        return response;
    } catch (error) {
        console.error(error);
        return [];
    }
}
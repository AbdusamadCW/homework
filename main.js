const URL_SERVER = "http://universities.hipolabs.com/search?country=Canada"; 
const GetData = async (name) => {
    try {
        const { data } = await axios.get(URL_SERVER);
        console.log(data);
        get(name);
    } catch (error) {
        // console.log();
    }
};

GetData()
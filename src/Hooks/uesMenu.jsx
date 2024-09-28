import { useEffect, useState } from "react"

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [Loading, setLoading] = useState(true);

    const URL = "menu.json"

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setMenu(data);
                setLoading(false)
            })
    }, [])
    return [menu, Loading]

}

export default useMenu;


import { useState, useEffect } from 'react'


export const useContacts = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    console.log("loading: ", isLoading)

    useEffect(() => {
        console.log("effect")
        const getContacts = async () => {
            try {
                setIsLoading(true)
                const response = await fetch("https://randomuser.me/api/?results=200")
                const { results, error } = await response.json()
                if (error) {
                    throw new Error(error)
                }
                setData(results)
                setIsError(false)
            } catch (error) {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }
        getContacts()
    }, [])

    return {
        data,
        isLoading,
        isError
    }
}
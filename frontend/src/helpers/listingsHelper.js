import { LISTING } from "../static/Content"
import ListingCard from "../components/browse/ListingCard"
import { getListings } from "../api/api"

export const generateListings = (listings) => {
    return listings.map((value, index) => {
        return <ListingCard key={index} listing={value} />
    })
}
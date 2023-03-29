import { LISTING } from "../static/Content"
import ListingCard from "../components/browse/ListingCard"

export const generateListings = () => {
    const listings = Array(10)
    listings.fill(LISTING)
    return listings.map((value, index) => {
        return <ListingCard />
    })
}
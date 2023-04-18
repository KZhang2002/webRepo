import { LISTING } from "../static/Content"
import ListingCard from "../components/browse/ListingCard"

export const generateListings = ( listNum = 35 ) => {
    let listings = Array(listNum)
    listings.fill(LISTING)
    return listings.map((value, index) => {
        let listing = value;

        return <ListingCard listing={listing} />
    })
}
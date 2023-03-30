import { LISTING } from "../static/Content"
import ListingCard from "../components/browse/ListingCard"

export const generateListings = () => {
    let listings = Array(35)
    listings.fill(LISTING)
    return listings.map((value, index) => {
        let listing = value;

        return <ListingCard listing={listing} />
    })
}
import { LISTING } from "../static/Content"
import ListingCard from "../components/browse/ListingCard"
import { getListings } from "../api/api"
import ProfileListingCard from "../components/profile/ProfileListingCard"

export const generateListings = (listings, isOwn) => {
    return listings.map((value, index) => {
        return !isOwn ? <ListingCard key={index} listing={value} /> : <ProfileListingCard key={index} listing={value} />
    })
}
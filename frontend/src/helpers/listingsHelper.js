import { LISTING } from "../static/Content"
import ListingCard from "../components/browse/ListingCard"
import { getListings } from "../api/api"
import ProfileListingCard from "../components/profile/ProfileListingCard"

export const generateListings = (listings, isOwn, filters) => {
    console.log(filters.email)
    if (filters.email == "") {
        return listings.map((value, index) => {
            return !isOwn ? <ListingCard key={index} listing={value} /> : <ProfileListingCard key={index} listing={value} />
        })
    } else {
        return listings.map((value, index) => {
            if (filters.email === value.seller_email) {
                return !isOwn ? <ListingCard key={index} listing={value} /> : <ProfileListingCard key={index} listing={value} />
            }
        })
    }
}
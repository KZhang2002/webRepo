import { TextField } from "@mui/material"
import { Box } from "@mui/material";

export default function FilterComponent(props) {

    const renderComponent = () => {
        if (true) {
            return (
               <TextField autoFocus {...props} variant="standard"></TextField>
            )
        }
    }

    return renderComponent();
}
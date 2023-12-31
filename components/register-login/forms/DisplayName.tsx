import { Box, TextField } from "@mui/material"

interface DisplayNameProps {
    displayName: string;
    onInputChange:(e: any) => void;
    displayNameValid: any;
    formSubmitted:boolean;

}

export const DisplayName = ({displayName,onInputChange,displayNameValid,formSubmitted}:DisplayNameProps) => {
  return (
    <Box style={{ width: "100%", marginBottom: "30px" }}>
      <form>
        <TextField
          error={!!displayNameValid && formSubmitted}
          color="warning"
          fullWidth
          id="standard-basic"
          label="Nombre de usuario"
          variant="standard"
          name="displayName"
          value={displayName}
          onChange={onInputChange}
        />
      </form>
    </Box>
  )
}

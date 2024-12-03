import AddArtist from "../modals/AddArtist";
import { Button } from "../ui/button";

const AddArtistButton = () => {
  return (
    <AddArtist>
      <Button className="hover:opacity-50 transition">Add Artist</Button>
    </AddArtist>
  );
};

export default AddArtistButton;

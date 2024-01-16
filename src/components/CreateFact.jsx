import axios from "axios";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

function CreateFact() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    fontfamily: "Quicksand",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#1f1f1f",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async () => {
    const response = await axios.post("https://quiz-app-backend-service-p5cz.onrender.com/facts", {
      factTitle: title,
      fact: description,
    });
    console.log(response);
    handleClose();
  };

  return (
    <>
      <div>
        <Button class="post" onClick={handleOpen}>Post fact</Button>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <Typography
              variant="h6"
              component="h2"
              style={{ color: "rgb(208, 0, 255)" }}
            >
              Post fact
            </Typography>
            <Typography
              sx={{ mt: 2 }}
              style={{ color: "rgb(208, 0, 255)" }}
            >
              <FormControl fullWidth variant="outlined">
                <InputLabel
                  style={{ color: "rgb(208, 0, 255)" }}
                >
                  Fact Title
                </InputLabel>
                <OutlinedInput
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  label="Fact Title"
                  style={{ color: "white" }}
                />
              </FormControl>
              <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
                <InputLabel
                  style={{ color: "rgb(208, 0, 255)" }}
                >
                  Fact Description
                </InputLabel>
                <OutlinedInput
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  label="Fact Description"
                  style={{ color: "white" }}
                />
              </FormControl>
            </Typography>
            <Button
              style={{ color: "rgb(208, 0, 255)" }}
              onClick={handleSubmit}
              sx={{ marginTop: 2 }}
            >
              Post
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default CreateFact;

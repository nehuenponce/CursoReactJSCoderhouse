import { Button } from "@mui/material";

const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
  return (
    <>
      <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
        <Button variant="contained" onClick={addOne}>
          +
        </Button>
        <h2> {counter} </h2>
        <Button
          variant="contained"
          onClick={subOne}
          disabled={counter === 1 ? true : false}
        >
          -
        </Button>

        <Button variant="outlined" onClick={() => onAdd(counter)}>
          Add To Cart
        </Button>
      </div>
    </>
  );
};

export default ItemCount;

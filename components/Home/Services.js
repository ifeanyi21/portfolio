import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function OutlinedCard({ header, content }) {
  const [width, setWidth] = React.useState();
  React.useEffect(() => {
    const tempWidth = window.innerWidth;
    if (tempWidth < 991) {
      setWidth(200);
    }
    if (tempWidth > 1399) {
      setWidth(260);
    }
    if (tempWidth > 991 && tempWidth < 1398) {
      setWidth(320);
    }
  }, []);
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          // borderColor: "rgb(79 70 229)",
          minHeight: width,
        }}
      >
        <React.Fragment>
          <CardContent>
            <h1 className="mb-1.5 text-2xl font-medium">{header}</h1>
            <p className="mb-1.5 text-muted">{content}</p>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}

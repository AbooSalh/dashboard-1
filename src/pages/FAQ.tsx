import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
const accordionData = [
  {
    summaryText: "What payment methods do you accept?",
    detailsText:
      "We accept Visa, MasterCard, American Express, Discover, and PayPal. All payments are securely processed.",
  },
  {
    summaryText: "How do I reset my password?",
    detailsText:
      "To reset your password, click on the 'Forgot Password' link on the login page. You will receive an email with instructions to reset your password.",
  },
  {
    summaryText: "Can I return an item purchased on sale?",
    detailsText:
      "Yes, items purchased on sale can be returned within 30 days, provided they are in original condition with all tags attached.",
  },
  {
    summaryText: "Do you offer gift cards?",
    detailsText:
      "Yes, we offer digital gift cards in various denominations. You can purchase them on our website and they will be emailed to the recipient.",
  },
  {
    summaryText: "What should I do if I receive a damaged item?",
    detailsText:
      "If you receive a damaged item, please contact our customer support team immediately with your order number and photos of the damage. We will arrange for a replacement or refund.",
  },
  {
    summaryText: "How can I check the status of my refund?",
    detailsText:
      "You can check the status of your refund by logging into your account and viewing your order history. Refunds typically take 5-7 business days to process.",
  },
  {
    summaryText: "Are your products environmentally friendly?",
    detailsText:
      "We are committed to sustainability and many of our products are made from eco-friendly materials. Look for the 'Eco-Friendly' label on product pages.",
  },
  {
    summaryText: "Do you have a loyalty program?",
    detailsText:
      "Yes, we offer a loyalty program where you can earn points for purchases and redeem them for discounts on future orders. Sign up on our website to start earning points.",
  },
  {
    summaryText: "How do I apply a discount code?",
    detailsText:
      "You can apply a discount code at checkout. Enter the code in the 'Discount Code' box and click 'Apply' to see the updated total.",
  },
  {
    summaryText: "What if I need to change my shipping address?",
    detailsText:
      "If you need to change your shipping address, please contact our customer support team as soon as possible. Changes can only be made before the order is shipped.",
  },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FAQ() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="w-full p-5">
      {accordionData.map((item, i) => {
        return (
          <Accordion
            key={item.summaryText}
            onChange={handleChange("panel" + i)}
          >
            <AccordionSummary
              aria-controls={`panel${i}-content`}
              id={`panel${i}-header`}
            >
              <Typography>{item.summaryText}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.detailsText}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

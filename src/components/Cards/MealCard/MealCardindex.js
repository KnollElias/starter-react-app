import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";
import { EditButton } from "./MealCardIcons";
import Content from "./MealCardContent";
import UpdateForm from "./MealCardUpdateForm";
import { useForm } from "react-hook-form";
function CardComponent({
    title,
    phoneNumber,
    emergencyNumber,
    postAddress,
    email,
}) {
    const {
        register,
        handleSubmit,
        watch,
        trigger,
        formState: { errors },
    } = useForm();

    const [isEditButtonClicked, setIsEditButtonClicked] = React.useState(false);
    const onSubmit = (data) => {
        trigger();
        setIsEditButtonClicked(false);
        //console.log(data);
    };
    return (
        <Card sx={{ width: "100%", borderRadius: "1rem", position: "relative" }}>
            {isEditButtonClicked ? (
                <form onSubmit={handleSubmit(onSubmit)} id={"editForm" + title}>
                    <UpdateForm register={register} errors={errors} title={title} />{" "}
                </form>
            ) : (
                <Content
                    email={email}
                    emergencyNumber={emergencyNumber}
                    postAddress={postAddress}
                    phoneNumber={phoneNumber}
                    title={title}
                />
            )}
            <CardActions
                sx={{
                    position: "absolute",
                    top: "1rem",
                    right: "2.5rem",
                    width: "2rem",
                    height: "2rem",
                }}
            >
                {isEditButtonClicked ? (
                    <Button
                        type="submit"
                        variant="text"
                        sx={{ color: "black" }}
                        onClick={() => {
                            setIsEditButtonClicked(false);
                        }}
                    >
                        Go back
                    </Button>
                ) : (
                    <Button
                        size="small"
                        type="button"
                        onClick={() => {
                            setIsEditButtonClicked(true);
                        }}
                    >
                        <EditButton />
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}

export default React.memo(CardComponent);

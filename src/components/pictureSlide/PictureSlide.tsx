import { Button, Card } from "@material-ui/core/";
import * as React from "react";
import { compose, withHandlers, withState } from "recompose";

interface IPicture {
    description: string;
    imageUrl: string;
}

interface IProps {
    pictures: IPicture[];
    index: number;
    prev: (len: number) => IEventListener;
    next: (len: number) => IEventListener;
}

interface IEventListener {
    handleEvent(evt: Event): void;
}

const PictureSlide: React.SFC<IProps> = ({ pictures, index, prev, next }) => {
    return (
        <Card style={{ width: "80%", margin: "20px auto" }}>
            <img
                src={pictures[index].imageUrl}
                alt="picture"
                style={{ width: "100%", height: "400px" }}
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "5px auto",
                    width: "98%",
                }}
            >
                <Button color="primary" onClick={() => prev(pictures.length)}>
                    Prev
                </Button>
                <Button color="primary" onClick={() => next(pictures.length)}>
                    Next
                </Button>
            </div>
        </Card>
    );
};

const enhancer = compose<IProps, IProps>(
    withState("index", "updateIndex", 0),
    withHandlers({
        next: ({ updateIndex }) => (max: number) =>
            updateIndex((n: number) => (n === max - 1 ? 0 : n + 1)),
        prev: ({ updateIndex }) => (max: number) =>
            updateIndex((n: number) => (n === 0 ? max - 1 : n - 1)),
    })
);

export default enhancer(PictureSlide) as any;

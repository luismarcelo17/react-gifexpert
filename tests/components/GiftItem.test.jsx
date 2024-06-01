import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GiftItem />", () => {
    const title = "sitama";
    const url = "https://onepuchn.com/saitama.jpg";

    test("Debe hacer martch con el snapshot", () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test("debe de mostrar la imagen con el URL y el ALT indicado", () => {
        render(<GifItem title={title} url={url} />);
        // Escribe el screen en consola o el sujeto de pruebas
        // screen.debug();

        // expect(screen.getByRole("img").src).toBe(url);
        // expect(screen.getByRole("img").alt).toBe(title);

        const { src, alt } = screen.getByRole("img");
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test("debe de mostrar el titulo en el componentes", () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getAllByText(title)).toBeTruthy();
    });
});

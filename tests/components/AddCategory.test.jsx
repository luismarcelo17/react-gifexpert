import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en el componente <AddCategory />", () => {
    test("debe de cambiar el valor de la caja de texto ", () => {
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole("textbox");

        fireEvent.input(input, { target: { value: "saitama" } });
        // screen.debug();
        expect(input.value).toBe("saitama");
    });

    test("debe de llamar onNewcategory si el input tiene un valor ", () => {
        const inputValue = "Saitama";
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value: inputValue } });
        // screen.debug();
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe("");

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test("no debe de llamar el onNewCategory si el input esta vacio", () => {
        //Tarea
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled;
    });
});

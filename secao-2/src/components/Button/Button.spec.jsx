import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("<Button/>", () => {
  it("should render the button with the text 'Load More ' ", () => {
    render(<Button text="load more" />);

    const button = screen.getAllByRole("button", { name: /loadmore/i });
    expect(button).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import Sidebar from ".";

describe("Sidebar component ", () => {
  it("- Render", () => {
    const { container } = render(<Sidebar />);
    
    const sidebarNode = container.getElementsByClassName('sidebar');

    expect(sidebarNode.length).toBe(1);
  });
});

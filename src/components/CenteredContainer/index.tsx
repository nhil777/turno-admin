import { CenteredContainerProps } from "./types";

export const CenteredContainer = ({ children }: CenteredContainerProps) => {
    return (
        <div className="d-flex justify-content-end">
            {children}
        </div>
    );
}
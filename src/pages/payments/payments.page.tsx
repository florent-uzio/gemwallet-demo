import { Page } from "../../shared/components"
import { Payment } from "./components"

export const PaymentsPage = () => {
  return (
    <Page>
      <Page.Header>
        <Page.Title title="Payments" />
      </Page.Header>
      <Page.Body>
        <Payment />
      </Page.Body>
    </Page>
  )
}

import { formatSelectors } from "./lib"

Cypress.Commands.overwrite('get', (originalFn, selectors) =>
  originalFn(formatSelectors(selectors))
)

Cypress.Commands.overwrite('find', (originalFn, subject, selectors) =>
  originalFn(subject, formatSelectors(selectors))
)


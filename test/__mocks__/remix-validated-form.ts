export const useField = jest.fn((name) => ({
  error: "",
  touched: false,
}));

declare module "remix-validated-form" {
  export const useField: typeof useField;
}

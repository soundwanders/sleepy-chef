export const mockHcaptchaVerify = jest.fn().mockResolvedValue(true);

const hCaptchaMock = jest.fn().mockImplementation(() => ({
  verify: mockHcaptchaVerify,
}));

export default hCaptchaMock;

import { mount } from "@vue/test-utils";
import HomePage from "../../components/screens/HomePage.vue";

describe("HomePage Component unit test", () => {
  test("renders the HomePage component", () => {
    const wrapper = mount(HomePage, {
      global: {
        mocks: {
          $store,
        },
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

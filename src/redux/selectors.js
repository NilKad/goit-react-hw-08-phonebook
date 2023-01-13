export const selectContacts = state => state.contacts.contactsList;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;

export const selectAuthUser = state => state.authUser.user;
export const selectAuthToken = state => state.authUser.token;
export const selectAuthIsLogin = state => state.authUser.isLogin;
export const selectAuthIsRefreshing = state => state.authUser.isRefreshing;

export type RootStackParamsList = {
    Home: undefined,
    Profile: {userId: string},
    New: {postId: string},
    Feed: {sort: 'asc' | 'des+c' } |  undefined;
}
#include<bits/stdc++.h>
using namespace std;

void BackPrint(int i, int n){

    if(i>n){
        return;
    }
    BackPrint(i+1,n);
    cout<<i<<" ";
}
int main(){
    int x;
    cin>>x;

    BackPrint(1,x);
}
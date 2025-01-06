#include <iostream>

using namespace std;
int N, M, a[1000], p[1000], i, j, k, sc, sp, aux, l;
int main()
{
    cin>>N>>M;
    for(i=1; i<=N; i++)
        cin>>a[i];
     for(i=1; i<=M; i++)
        cin>>p[i];
     for(i=1; i<N-1; i++){
        for(j=i+1; j<N;j++)
        {
            if(a[i]<a[j])
                {
                    aux=a[i];
                    a[i]=a[j];
                    a[j]=aux;
                }
        }
     }

    k=1;
    sc=a[1];
    l=1;
    i=1;

        for(j=l; j<=M; j++)
        {
            while(l<=M ){
                sp=sp+p[j];
            if(sp<=sc)//1. l=1 sp=9 sc=10 k=1 l=2 ; 2. l=2 sp=12 sc=10 sc=15 k=2 l=3; 3. l=3 sp=14 sc=15 k=2 l=4; 4. l=4 sp=16 sc=15 sc=19 k=3 l=5 ; 5, l=5 sp=19 sc=19 k=3 l=6; 6. l=6
            {
                cout<<k<<" ";
                l++;
                break;
            }
            else {
                sc=sc+a[++i];
                k++;
                cout<<k<<" ";
                l++;
                break;
            }
            }
        }



    return 0;
}
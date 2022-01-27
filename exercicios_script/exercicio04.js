var a=0, b=0, c, d, i, v=[]

c=prompt("Digite o número correspondente ao valor da sequência de fibonacci que você deseja: ")

	for(i=0;i<parseFloat(c); i++){
		if(i==1){
			a=1;
		}
		d=a+b;
		b=a
		a=d
		v[i]=d
		
	}
	alert(v)




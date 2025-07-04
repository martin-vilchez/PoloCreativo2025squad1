#Mostrar
Frase = "Programa o seras programador"

print(Frase.upper())

print(Frase.lower())

print(Frase.title())

#esta la letra en la cadena?

print("a" in Frase)
print(len(Frase))
print(Frase[5])
print(Frase[3:11].upper())

cuil = 20-45678990-1
primera_parte = cuil[0:2]
dni = cuil[-1]
verificador = cuil[12]
print(primera_parte)
print(dni)
print(verificador)

cuil_desarmado = cuil.split("-")
print(cuil_desarmado)
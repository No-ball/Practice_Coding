.386
.MODEL flat, stdcall
.STACK 4096
.data
SOURCE	db	"Hello, world", 0, 0, 0, 0
TARGET	db	16 dup(?)
.CODE
main PROC
	mov esi, offset SOURCE
	mov	edi, offset TARGET
	mov al, [esi + 13]
	mov eax, [esi]
	mov eax, [esi]
	mov [edi], eax
	mov al, [esi + 6]
	mov [edi + 6], eax
	mov eax, [esi + 7]
	mov [edi + 7], eax
	mov eax, 0
	mov al, 0
	mov ax, [esi + 4]
	mov [edi + 4], ax
	mov ax, [esi + 11]
	mov [edi + 11], ax
main endp
end main